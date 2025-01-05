import PrismaButton from "@/components/PrismaButton";
import { prisma } from "@/lib/prisma";



export default async function Home() {
  const checkins=await prisma.checkin.findMany();
  console.log(checkins)
  return (
    <>
    <div>hi there, you made it</div>
    <div>Number of checkins: {checkins.length}</div>
    <div>
      <PrismaButton />
    </div>
    </>
  );
}
