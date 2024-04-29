
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';

const AddCraftItem = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const onSubmit = data =>{
        const postData = { ...data }

        console.log(postData)
        
    }
    return (
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
                            <input type="text" {...register('image')} placeholder='Photo URL' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Item_Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('item_name')} placeholder='item_name' className='input input-bordered w-full' />
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
                            <input type="text" {...register('subcategory_name')} placeholder='Subcategory_name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('description')} placeholder='short_description' className='input input-bordered w-full' />
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
                            <input type="text" {...register('price')} placeholder='Price' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('rating')} placeholder='Rating' className='input input-bordered w-full' />
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
                            <input type="text" {...register('customization')} placeholder='Customization' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className="label">
                            <span className='label-text'>Processing_Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('processing_time')} placeholder='Processing_Time' className='input input-bordered w-full' />
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
                            <input type="text" {...register('stockStatus')} placeholder='Stock Status' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className='label-text'>User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" {...register('email')} defaultValue={user?.email} readOnly className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className='label-text'>User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register('name')} defaultValue={user?.displayName} readOnly className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='text-center'>
                <input className="btn btn-secondary w-1/2 mb-4" type="submit" value="Add" />
                </div>
            </form>

        </div>
    );
};

export default AddCraftItem;