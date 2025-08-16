import React, { useEffect, useState } from 'react'
import { 
  Package, 
  Upload, 
  Save, 
  Image as ImageIcon,

  Tag,
  FileText,

  IndianRupee,
  LogIn
} from 'lucide-react';

import axios from "axios"
import { handleError, handlesuccess } from '../toast.utils';

function Products() {
  const [productdata, setproductdata] = useState({
    name: '', category: '', price: '', bestSeller: true, description: ''
  });

  
  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    const files = Array.from(e.target.files || []);
    console.log('selected files:', files.map(f => f.name));
    if (!files.length) return;
    setImages(prev => [...prev, ...files]);
    e.target.value = ""; // allow picking the same file again
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const formdata = new FormData();
    Object.entries(productdata).forEach(([k,v])=>formdata.append(k , String(v)))
    images.forEach((file)=> formdata.append('images' , file))


    const res =  await axios.post("http://localhost:8000/api/v1/products/addproduct", formdata , { withCredentials: true }
        );
        console.log(res);
        
          console.log('upload response:', res.status, res.data);
       handlesuccess(res.data.message)
        setproductdata({
            name: '', 
            category: '', 
            price: '', 
            bestSeller: true, 
            description: ''
        });
        setImages([]);
        
      
    } catch (error) {
      // ...error handling...
       console.log(error.response.data.message);
       
      handleError(error.response.data.message)
      
    }
  };
  

  return (
        <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Add New Product</h2>
            </div>
            <p className="text-blue-100 mt-2">Fill in the details to add a new product to your inventory</p>
          </div>

          {/* Form */}
          <form className="p-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column - Image Upload */}
              <div className="lg:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Product Image
                </label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                  <div className="py-8">
                    <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Drop your image here or</p>
                    <label className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors">
                      <Upload className="h-4 w-4 mr-2" />
                      Browse Files
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImages}
                        className="hidden"
                      />
                    </label>
                    {images.length > 0 && (
                      <p className="text-xs text-gray-500 mt-3">{images.length} file(s) selected</p>
                    )}
                  </div>
                </div>

                {/* Preview grid */}
                {images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {images.map((file, idx) => {
                      const url = URL.createObjectURL(file);
                      return (
                        <div key={idx} className="relative group">
                          <img
                            src={url}
                            alt={file.name}
                            className="h-28 w-full object-cover rounded-lg border border-gray-200"
                            onLoad={() => URL.revokeObjectURL(url)}
                          />
                          <button
                            type="button"
                            onClick={() => setImages(arr => arr.filter((_, i) => i !== idx))}
                            className="absolute top-2 right-2 px-2 py-1 text-xs bg-white/90 border border-gray-300 rounded-md shadow hover:bg-white"
                          >
                            Remove
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Columns - Form Fields */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Product Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <div className="relative">
                    <Package className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter product name"
                      value={productdata.name}
                      onChange={(e)=>setproductdata(p=>({ ...p, name: e.target.value }))}
                    />
                  </div>
                </div>
           

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category *
                  </label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none"
                      value={productdata.category}
                      onChange={(e)=>setproductdata(p=>({ ...p, category: e.target.value }))}
                    >
                      <option value="">Select category</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Clothing">Clothing & Fashion</option>
                      <option value="Home">Home & Garden</option>
                      <option value="Sports">Sports & Outdoors</option>
                      <option value="Books">Books & Media</option>
                      <option value="Health">Health & Beauty</option>
                      <option value="Toys">Toys & Games</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Food">Food & Beverages</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price *
                  </label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="0.00"
                      value={productdata.price}
                      onChange={(e)=>setproductdata(p=>({ ...p, price: e.target.value }))}
                    />
                  </div>
                </div>


                {/* Status */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Best seller
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="bestSeller"
                        value="true"
                        checked={productdata.bestSeller === true}
                        onChange={()=>setproductdata(p=>({ ...p, bestSeller: true }))}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">true</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="bestSeller"
                        value="false"
                        checked={productdata.bestSeller === false}
                        onChange={()=>setproductdata(p=>({ ...p, bestSeller: false }))}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">false</span>
                    </label>
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      rows="4"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Enter product description..."
                      value={productdata.description}
                      onChange={(e)=>setproductdata(p=>({ ...p, description: e.target.value }))}
                    ></textarea>
                  </div>
                </div>

              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Save className="h-5 w-5 mr-2" />
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
  

export default Products
