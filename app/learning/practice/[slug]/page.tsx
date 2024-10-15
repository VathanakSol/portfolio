'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle } from 'lucide-react'

const exercises = {
  "ci-cd-pipeline": {
    title: "CI/CD Pipeline Setup",
    description: "Learn to set up a Continuous Integration and Continuous Deployment pipeline.",
    steps: [
      {
        title: "Version Control Setup",
        content: "Initialize a Git repository and create a main branch.",
        task: "Run 'git init' and create a new file called 'app.js'",
        solution: "git init && touch app.js"
      },
      {
        title: "Continuous Integration",
        content: "Set up a CI tool like Jenkins or GitHub Actions.",
        task: "Create a .github/workflows/ci.yml file for GitHub Actions",
        solution: `
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14.x'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
        `
      },
      {
        title: "Continuous Deployment",
        content: "Configure automatic deployment to a staging environment.",
        task: "Add a deployment step to your CI/CD pipeline",
        solution: `
- name: Deploy to Heroku
  uses: akhileshns/heroku-deploy@v3.12.12
  with:
    heroku_api_key: 
    heroku_app_name: "your-app-name"
    heroku_email: "your-email@example.com"
        `
      }
    ]
  },
  "docker-containerization": {
    title: "Docker Containerization",
    description: "Practice containerizing applications using Docker.",
    steps: [
      {
        title: "Dockerfile Creation",
        content: "Create a Dockerfile for a simple Node.js application.",
        task: "Write a Dockerfile that uses the official Node.js image and copies your app files",
        solution: `
FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]
        `
      },
      {
        title: "Building Docker Image",
        content: "Build a Docker image from your Dockerfile.",
        task: "Use the docker build command to create an image",
        solution: "docker build -t my-node-app ."
      },
      {
        title: "Running Docker Container",
        content: "Run a container from your newly created Docker image.",
        task: "Use the docker run command to start a container",
        solution: "docker run -p 8080:8080 -d my-node-app"
      }
    ]
  },
  "spring-boot-rest-api": {
    title: "Spring Boot REST API",
    description: "Build a RESTful API using Spring Boot.",
    steps: [
      {
        title: "Project Setup",
        content: "Set up a new Spring Boot project using Spring Initializr.",
        task: "Create a new Spring Boot project with Web and JPA dependencies",
        solution: "Visit https://start.spring.io/ and select Web and JPA dependencies"
      },
      {
        title: "Entity Creation",
        content: "Create a JPA entity for your API.",
        task: "Create a User entity with id, name, and email fields",
        solution: `
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String email;

    // Getters and setters
}
        `
      },
      {
        title: "Controller Implementation",
        content: "Implement a REST controller for CRUD operations.",
        task: "Create a UserController with GET, POST, PUT, and DELETE endpoints",
        solution: `
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // Implement PUT and DELETE methods
}
        `
      }
    ]
  },
  "spring-security": {
    title: "Spring Security Implementation",
    description: "Implement authentication and authorization using Spring Security.",
    steps: [
      {
        title: "Dependency Addition",
        content: "Add Spring Security dependency to your project.",
        task: "Add the Spring Security dependency to your pom.xml or build.gradle file",
        solution: `
<!-- For Maven -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

// For Gradle
implementation 'org.springframework.boot:spring-boot-starter-security'
        `
      },
      {
        title: "Security Configuration",
        content: "Create a basic security configuration.",
        task: "Create a SecurityConfig class that extends WebSecurityConfigurerAdapter",
        solution: `
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/", "/home").permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
            .logout()
                .permitAll();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
        `
      },
      {
        title: "User Details Service",
        content: "Implement a custom UserDetailsService.",
        task: "Create a CustomUserDetailsService that implements UserDetailsService",
        solution: `
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return new org.springframework.security.core.userdetails.User(
            user.getUsername(),
            user.getPassword(),
            Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"))
        );
    }
}
        `
      }
    ]
  }
}

export default function PracticeExercisePage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [userSolution, setUserSolution] = useState('')
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)

  const exercise = exercises[params.slug as keyof typeof exercises]

  if (!exercise) {
    router.push('/learning/practice')
    return null
  }

  const handleNext = () => {
    if (currentStep < exercise.steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setUserSolution('')
      setFeedback(null)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setUserSolution('')
      setFeedback(null)
    }
  }

  const handleSubmit = () => {
    const isCorrect = userSolution.trim() === exercise.steps[currentStep].solution.trim()
    setFeedback(isCorrect ? 'correct' : 'incorrect')
  }

  const progress = ((currentStep + 1) / exercise.steps.length) * 100

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{exercise.title}</CardTitle>
          <p className="text-muted-foreground">{exercise.description}</p>
          <Progress value={progress} className="w-full mt-4" />
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="instructions" className="w-full">
            <TabsList>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="task">Task</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
            </TabsList>
            <TabsContent value="instructions">
              <h3 className="text-lg font-semibold mb-2">{exercise.steps[currentStep].title}</h3>
              <p>{exercise.steps[currentStep].content}</p>
            </TabsContent>
            <TabsContent value="task">
              <h3 className="text-lg font-semibold mb-2">Your Task</h3>
              <p>{exercise.steps[currentStep].task}</p>
            </TabsContent>
            <TabsContent value="solution">
              <h3 className="text-lg font-semibold mb-2">Solution</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{exercise.steps[currentStep].solution}</code>
              </pre>
            </TabsContent>
          </Tabs>
          <div className="mt-6">
            <textarea
              className="w-full h-40 p-2 border rounded-md"
              value={userSolution}
              onChange={(e) => setUserSolution(e.target.value)}
              placeholder="Enter your solution here..."
            />
          </div>
          {feedback && (
            <div className={`mt-4 p-2 rounded-md ${feedback === 'correct' ? 'bg-green-100' : 'bg-red-100'}`}>
              {feedback === 'correct' ? (
                <div className="flex items-center text-green-700">
                  <CheckCircle className="mr-2" />
                  Correct! Well done!
                </div>
              ) : (
                <div className="flex items-center text-red-700">
                  <XCircle className="mr-2" />
                  Not quite right. Try again or check the solution.
                </div>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handlePrevious} disabled={currentStep === 0}>Previous</Button>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleNext} disabled={currentStep === exercise.steps.length - 1}>Next</Button>
        </CardFooter>
      </Card>
    </div>
  )
}