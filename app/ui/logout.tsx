import { signOut } from "../../auth";


export default async function Logout() {
  
    return (

        <div>
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}>
                    <button type="submit">Log Out</button>
                   

                </form>

        </div>








    )

}