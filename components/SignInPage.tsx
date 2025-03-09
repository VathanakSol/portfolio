import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const redirectUrl = "/learning"; // Set this dynamically based on your logic

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn redirectUrl={redirectUrl} />
    </div>
  );
}
