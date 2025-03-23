"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const BuyMeCoffee = () => {
  const [loadingTab1, setLoadingTab1] = useState(true);
  const [loadingTab2, setLoadingTab2] = useState(true);
  const khmerQRLink = "https://pay.ababank.com/FaoheDXWd6dohWn78";
  const dollarQRLink = "https://pay.ababank.com/CUd6dMgNumbnUFeX8";
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black py-10">
      <Tabs defaultValue="tab1" className="w-full max-w-md mx-auto px-4">
        {/* Tabs List */}
        <TabsList className="grid w-full grid-cols-2 bg-gray-200 dark:bg-gray-800 p-1 rounded-lg border border-gray-300 dark:border-gray-700">
          <TabsTrigger
            value="tab1"
            className="rounded-md py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Khmer QR
          </TabsTrigger>
          <TabsTrigger
            value="tab2"
            className="rounded-md py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900"
          >
            Dollar QR
          </TabsTrigger>
        </TabsList>

        {/* Tab Content for Khmer QR */}
        <TabsContent
          value="tab1"
          className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            {loadingTab1 && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-white dark:bg-gray-800">
                <Loader2 className="animate-spin h-8 w-8 text-blue-500 dark:text-blue-300" />
              </div>
            )}
            <Link href={khmerQRLink}>
              <Image
                src="/assets/khmerqr.jpeg"
                alt="Khmer KHQR"
                width={400}
                height={160}
                className={`w-full h-auto object-cover transition-opacity duration-500 ${
                  loadingTab1 ? "opacity-0" : "opacity-100"
                }`}
                onLoadingComplete={() => setLoadingTab1(false)}
              />
            </Link>
          </motion.div>
        </TabsContent>

        {/* Tab Content for Dollar QR */}
        <TabsContent
          value="tab2"
          className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            {loadingTab2 && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-white dark:bg-gray-800">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 dark:border-white" />
              </div>
            )}
            <Link href={dollarQRLink}>
              <Image
                src="/assets/dollarqr.jpeg"
                alt="Dollar KHQR"
                width={400}
                height={160}
                className={`w-full h-auto object-cover transition-opacity duration-500 ${
                  loadingTab2 ? "opacity-0" : "opacity-100"
                }`}
                onLoadingComplete={() => setLoadingTab2(false)}
              />
            </Link>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BuyMeCoffee;
