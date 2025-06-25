import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/nextAuth";
import SigninWithGoogle from "@/app/_components/SigninWithGoogle";
import Signout from "@/app/_components/Signout";

const  Profile = async () => {
    const session = await getServerSession(authOptions);
  return (
    <div>
    {session ? (
    
        <div> 
          <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
          <Image
            className="rounded-full"
            src={session.user?.image as string || "/default-avatar.png"}
            alt="User Avatar"
            width={100}
            height={100}
          />
          <p className="text-sm text-gray-500">{session.user?.email}</p>
          <Signout/>
        </div>
     ):(
        <SigninWithGoogle />  
      )}</div>
  )
}

export default Profile