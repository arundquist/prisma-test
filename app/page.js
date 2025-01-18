import PrismaButton from "@/components/PrismaButton";
import { prisma } from "@/lib/prisma";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";




export default async function Home() {
  const checkins=await prisma.checkin.findMany();
  // console.log(checkins)
  
const {getUser} = getKindeServerSession();
const user = await getUser();

console.log(user);
  return (
    <>
    <div>hi there, you made it</div>
    <div>Number of checkins: {checkins.length}</div>
    <div>
      <PrismaButton />
    </div>
    <div>
   

<LoginLink>Sign in</LoginLink>

<RegisterLink>Sign up</RegisterLink>
<LogoutLink>Log out</LogoutLink>
    </div>
    </>
  );
}
