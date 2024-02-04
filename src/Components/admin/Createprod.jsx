import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Createprod = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    richDescription: '',
    brand: '',
    price: 0,
    category: '',
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    isFeatured: false,
    image: null,
  });


  const categories = [{
    name: 'Electronics',
    id: 1
  },
  {
    name: 'Mens',
    id: 2
  },
  {
    name: 'Women',
    id: 3
  },
  {
    name: 'Watches',
    id: 4
  },
  {
    name: 'Others',
    id: 5
  },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData.category)
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    await uploadImage();


    axios.post('http://localhost:5000/api/v1/prod/', formData)
      .then(response => {
        toast.success('Product created successfully');
      })
      .catch(error => toast.error('Error creating product:', error));
  };

  const uploadImage = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", image);
    data.append(
      "upload_preset", 'hs9x732a'
    );
    data.append("cloud_name", 'dolzqjqfs');
    data.append("folder", "Cloudinary-React");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dolzqjqfs/image/upload`, data);

      setUrl(response.data.public_id);
      setImage(response.data.secure_url)
      setFormData({
        ...formData,
        image: [{
          id: response.data.public_id,
          url: response.data.secure_url
        }],
      });


      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const handleResetClick = () => {
    setPreview(null);
    setImage(null);
  };

  return (
    // <div className='flex flex-col items-center'>
    //   <h1 className='text-[40px]'>Create Product</h1>
    //   <form onSubmit={handleSubmit} className='flex flex-col items-center'>
    //     <label className='items-center'>
    //       Name:
    //       <input  type="text" name="name" value={formData.name} onChange={handleInputChange} />
    //     </label>
    //     <label className="block text-sm font-medium text-gray-700">
    //       Description:
    //       <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
    //     </label>
    //     <label>
    //       Rich Description:
    //       <textarea name="richDescription" value={formData.richDescription} onChange={handleInputChange}></textarea>
    //     </label>
    //     <label>
    //       Brand:
    //       <input  type="text" name="brand" value={formData.brand} onChange={handleInputChange} />
    //     </label>
    //     <label>
    //       Price:
    //       <input  type="number" name="price" value={formData.price} onChange={handleInputChange} />
    //     </label>



    //     <label className="block text-sm font-medium text-gray-700">
    //       Category:
    //       <select name="category" className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" value={formData.category} onChange={handleInputChange}>
    //         <option value="">Select a category</option>
    //         {categories.map(category => (
    //           <option key={category.id} value={category.name}>{category.name}</option>
    //         ))}
    //       </select>
    //     </label>
    //     <label>
    //       Count in Stock:
    //       <input  type="number" name="countInStock" value={formData.countInStock} onChange={handleInputChange} />
    //     </label>
    //     <label>
    //       Rating:
    //       <input  type="number" name="rating" value={formData.rating} onChange={handleInputChange} />
    //     </label>
    //     <label>
    //       Number of Reviews:
    //       <input  type="number" name="numReviews" value={formData.numReviews} onChange={handleInputChange} />
    //     </label>
    // <label>
    //   Featured:
    //   <input  type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={() => setFormData({ ...formData, isFeatured: !formData.isFeatured })} />
    // </label>
    //     <label>
    //       Image:
    //       <input  type="file" name="image" accept="image/*" onChange={handleImageChange} />
    //     </label>
    //     <button type="submit">Submit</button>
    //     {/* <button onClick={uploadImage} >Image</button> */}
    //   </form>
    // </div>

    <div className="w-screen flex items-center justify-center bg-stone-100">
      <div className="p-10 rounded shadow-sm bg-stone-50 w-[50%]">
        <div className="mb-6 p-10 bg-white -m-10">
          <h1 className="font-bold text-2xl text-[#121212]">Create product</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col mb-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder=""
                className="mt-2 px-4 py-2 shadow rounded"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col mb-4">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                className="mt-2 px-4 py-2 shadow rounded"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col mb-4">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              type="email"
              placeholder=""
              className="mt-2 px-4 py-2 shadow rounded"
            />
          </div>

          {/* Rich Description */}
          <div className="flex flex-col mb-4">
            <label htmlFor="richDescription">Rich Description</label>
            <textarea
              id="richDescription"
              name="richDescription"
              value={formData.richDescription}
              onChange={handleInputChange}
              type="email"
              placeholder=""
              className="mt-2 px-4 py-2 shadow rounded"
            />
          </div>

          <div className="flex justify-between">
            {/* Brand */}
            <div className="flex flex-col mb-4">
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                type="text"
                placeholder=""
                className="mt-2 px-4 py-2 shadow rounded w-full"
              />
            </div>

            {/* Price */}
            <div className="flex flex-col mb-4 w-[20%]">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                type="number"
                rows="5"
                placeholder=""
                className="mt-2 px-6 py-2 mx-2 shadow rounded w-full"
              />
            </div>

            {/* Stock */}
            <div className="flex flex-col mb-4 w-[20%]">
              <label htmlFor="countInStock">Stock</label>
              <input
                id="countInStock"
                name="countInStock"
                value={formData.countInStock}
                onChange={handleInputChange}
                type="number"
                rows="5"
                placeholder=""
                className="mt-2 px-6 py-2 mx-2 shadow rounded w-full"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-1 text-center">
            {image ?
              <img src={preview} className='h-[80px] py-2 mx-auto' alt="" />
              : <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>}
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input  id="file-upload"  type="file" className='sr-only' name="image" accept="image/*" onChange={handleImageChange} />
              </label>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
          </div>

          <div className="mt-6 flex gap-6 justify-between">
            <div>
              <label>Featured:</label>
              <input
                type="checkbox"
                className="mt-2 px-4 py-2 shadow rounded w-[20px]"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={() => setFormData({ ...formData, isFeatured: !formData.isFeatured })}
              />
            </div>
            <button type="submit" className="rounded-full bg-orange-500 py-4 px-10 font-bold text-white shadow hover:bg-blue-500">Upload</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Createprod;