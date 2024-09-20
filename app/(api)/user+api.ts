import { neon } from '@neondatabase/serverless';





// See https://neon.tech/docs/serverless/serverless-driver
// for more information

export async function  POST(request : Request){
  const sql = neon(`${process.env.DATABASE_URL}`); 
  const { name , email , clerkId } = await request.json() ;
  
  if ( !name || !email || !clerkId ){
    return Response.json({ error:"Missing required fields"}, 
        {status:400}
    )
  }
try {
  const response = await sql `
     INSERT INTO USERS (
     name,
     email, 
     clerk_id
     )
     VALUES(
     ${name},
     ${email},
     ${clerkId}
     )
  `;
   return new Response(JSON.stringify({data: response}),{
    status:201,   })      
    } catch (error) {
         console.log(error)
         return  Response.json ({ error : error}, { status:200});
    }
}