// import { Button } from "@/components/ui/button";

import  Header  from "@/components/header";
import {Hero} from "@/components/hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {

  
  return (
    <div className="">
      
      <Header />
      <Hero />
    </div>
  );
}
