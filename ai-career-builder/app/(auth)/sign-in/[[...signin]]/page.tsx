'use client';
import { SignIn } from "@clerk/nextjs";

// export default function SignInPage() {
//   return (
//     <div className="flex justify-center pt-40">
//       <SignIn redirectUrl="/dashboard" />
//     </div>
//   );
// }

const Page =()  => {
  return<SignIn/>
};

export default Page;