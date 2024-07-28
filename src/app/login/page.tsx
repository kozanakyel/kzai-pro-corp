// "use client";

// import { supabase } from "@/lib/supabase";
// import { useRouter } from "next/navigation";

// import { useState } from "react";

// export default function Login() {
//     const [data, setData] = useState<{
//         email: string;
//         password: string;
//     }>({email: '', password: ''});


// // email: 'kozanakyel@gmail.com',
// //             password: '123456'

// const router = useRouter();

//   const login = async () => {
//     try{
//         let {data: dataUser, error } = await supabase.auth.signInWithPassword({
//             email: data.email,
//             password: data.password
//         })
//     if(dataUser) {
//         router.refresh()
//     }

//     }catch(error){
//       console.log(error);
//     }
//   }


//   const handleChange = (e: any) => {
//     const {name, value} = e.target;
//     setData((prev: any) => ({
//       ...prev,
//       [name]: value
//     } ))
//     }


//   return <div>
//     <div className='grid'>
//     <label>Email</label>
//     <input 
//     type="text" 
//     name='email' 
//     value={data?.email}
//     onChange={handleChange}  />
//     </div>
//     <div className='grid'>
//     <label>Password</label>
//     <input 
//     type="password" 
//     name='password' 
//     value={data?.password}
//     onChange={handleChange}  />
//     </div>

//     <button onClick={login}>Login</button>
//   </div>;
// }

"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="text-3xl font-bold">Welcome to KZAI Pro</h1>
      </header>
      
      <main className="main-content">
        <p className="mt-4 text-lg">
          Your AI-powered solution for financial market predictions.
        </p>
        <button onClick={() => alert('Get Started clicked')}>
          Get Started
        </button>
      </main>

      <footer className="footer">
        <p>© 2024 KZAI Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}