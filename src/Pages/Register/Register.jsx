import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{

        console.log(data);

    }
    return (       
           <div>
             <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-6 text-center">Please Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Your Name" {...register('name')} className="border w-full mb-4 py-2 px-4" />
                    <br />
                    <input type="text" placeholder="Photo URL" {...register('photo')} className="border w-full py-2 px-4 mb-4" />
                    <br />
                    <input type="email" placeholder="Email" {...register('email')} className="border w-full py-2 px-4 mb-4" />
                    <br />
                    <input type="password" placeholder="Password" {...register('password')} className="border w-full py-2 px-4 mb-4" />
                    <br />
                    <input className="btn btn-secondary w-full mb-4" type="submit" value="Register" />
                </form>
            </div>  
           </div>      
    );
};

export default Register;