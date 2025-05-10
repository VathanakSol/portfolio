#!/bin/bash

# Function to display usage
usage() {
    echo "Usage: $0"
    echo "This script commits and pushes changes to the current Git repository."
    exit 1
}

# Check if the current directory is a Git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "Error: Not inside a Git repository."
    usage
fi

# Get the list of updated or newly created files
changed_files=$(git diff --cached --name-only)

# Function to show loading animation
loading_animation() {
    local pid=$1
    local delay=0.75
    local spin='/-\|'

    while ps -p $pid > /dev/null; do
        for i in $(seq 0 3); do
            echo -ne "\r${spin:i:1} Loading..."
            sleep $delay
        done
    done
    echo -ne "\rDone!        \n"
}

while true; do
    echo -n "Enter commit message (or press Enter for auto-commit based on file changes): "
    read commit_message

    # Remove leading and trailing whitespace
    commit_message_trimmed="$(echo -e "${commit_message}" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')"

    if [ -z "$commit_message_trimmed" ]; then
        # If no manual message, create auto-commit message based on changed files
        if [ -z "$changed_files" ]; then
            commit_message="Auto commit (no specific file changes)"
        else
            # Use the list of changed files for the commit message
            commit_message="Auto commit: updated $(echo $changed_files | tr '\n' ' ')"
        fi
        break
    else
        commit_message="$commit_message_trimmed"
        break
    fi
done

# Stage all changes (if not already staged)
git add .

# Commit changes with the provided message in the background with loading animation
{
    git commit -m "$commit_message"
} &

# Get the process ID of the last command (git commit)
loading_animation $!

# Check if the commit was successful and notify user
if [ $? -eq 0 ]; then
    echo "Commit successful: $commit_message"
else
    echo "Error: Commit failed."
    exit 1
fi

# Get current branch name
current_branch=$(git symbolic-ref --short HEAD)

# Prompt for branch name with current branch as default
echo -n "Enter branch name to push to (default: $current_branch): "
read branch_name

# Use current branch if no input provided
if [ -z "$branch_name" ]; then
    branch_name=$current_branch
fi

# Push changes to the remote repository in the background with loading animation
{
    git push origin "$branch_name"
} &

# Get the process ID of the last command (git push)
loading_animation $!

# Check if the push was successful and notify user
if [ $? -eq 0 ]; then
    echo "Git push completed successfully!"
else
    echo "Error: Push failed."
    exit 1
fi

# Function to show a progress bar
show_progress() {
    local duration=$1  # Total time in seconds for the progress
    local bar_length=50  # Length of the progress bar
    local filled_char="█"  # Character for filled part of the bar
    local empty_char="░"   # Character for unfilled part of the bar

    # Loop for the duration of the progress
    for ((i=0; i<=duration; i++)); do
        # Calculate the percentage of completion
        local percent=$((i * 100 / duration))
        # Calculate the number of filled segments in the bar
        local filled=$((i * bar_length / duration))

        # Build the progress bar string
        local bar=""
        for ((j=0; j<filled; j++)); do
            bar+="$filled_char"
        done
        for ((j=filled; j<bar_length; j++)); do
            bar+="$empty_char"
        done

        # Print the progress bar with percentage, carriage return to overwrite
        printf "\r[%-${bar_length}s] %d%%" "$bar" "$percent"

        # Sleep for 1 second to simulate progress
        sleep 1
    done

    # Move to the next line when done
    echo -e "\nTask completed!"
}

# Usage of the progress bar
echo "Starting a task with a modern progress bar..."
show_progress 10  # Simulate a 10-second task

echo "All operations completed successfully!"
