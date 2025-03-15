import React, { Suspense } from "react";

import Loader from "@/app/(home)/_components/ui/skeleton/loader";
import LoginForm from "@/components/module/Login";

export default function LoginPage() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="h-screen m-auto w-full">
        <LoginForm />
      </div>
    </Suspense>
  );
}
