import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const craft = useLoaderData();
    const { _id, user_name, user_email, subcategory_Name,stockStatus,short_description,rating, processing_time, price, item_name, image, customization } = craft;

    const onSubmit = data =>{
        const updatedData = { ...data }

        // send data to the server

        fetch(`http://localhost:5000/craft/update/${_id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then( res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                Swal.fire("Your craft updated in database");
                
            }
        })
        
    }
    return (
        <div>
            <div className="bg-[#F4F3F0] p-24">
            <h2 className='text-3xl text-center font-extrabold'>Add a Craft Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* image and item_name row */}
                <div className='md:flex gap-3 mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('image')} defaultValue={image} className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Item_Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('item_name')} defaultValue={item_name} className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* subcategory_Name and short_description row */}
                <div className='md:flex gap-3 mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Subcategory_Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('subcategory_Name')} defaultValue={subcategory_Name} className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('description')} defaultValue={short_description} className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* price and rating row */}
                <div className='md:flex gap-3 mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('price')} defaultValue={price} className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('rating')} defaultValue={rating} className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* customization and processing_time row */}
                <div className='md:flex gap-3 mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('customization')} defaultValue={customization} className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Processing_Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('processing_time')} defaultValue={processing_time} className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* stock_status, user_email and user_name row */}
                <div className='md:flex justify-between mb-8'>
                    <div className='form-control'>
                        <label className="label">
                            <span className='label-text'>Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('stockStatus')} defaultValue={stockStatus} className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className='label-text'>User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" {...register('user_email')} defaultValue={user_email} readOnly className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className='label-text'>User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('user_name')} defaultValue={user_name} readOnly className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='text-center'>
                <input className="btn btn-secondary w-1/2 mb-4" type="submit" value="Add" />
                </div>
            </form>

        </div>
        </div>
    );
};

export default Update;