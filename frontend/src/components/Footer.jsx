import React from 'react'

import {  Instagram, Twitter, Facebook } from "lucide-react"

function Footer() {
  return (
   <footer className="bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">nexa</h3>
              <p className="text-stone-600 mb-6 max-w-md">
                Curating excellence across every category. From cutting-edge technology to timeless design, we bring you
                the world's finest products.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-5 w-5 text-stone-600 hover:text-stone-900 cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-stone-600 hover:text-stone-900 cursor-pointer transition-colors" />
                <Facebook className="h-5 w-5 text-stone-600 hover:text-stone-900 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="font-medium text-stone-900 mb-4">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    Fashion
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    Outdoors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    Beauty
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-stone-900 mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-stone-600 text-sm">© 2024 nexa. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
