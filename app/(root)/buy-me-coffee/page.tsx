"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const BuyMeCoffee = () => {
  return (
    <div className="w-full grid place-content-center bg-white dark:bg-gray-900 py-4">
      <Tabs defaultValue="tab1" className="w-full max-w-[400px] px-4 sm:px-0">
        <TabsList className="grid w-full grid-cols-2 dark:bg-gray-800">
          <TabsTrigger
            value="tab1"
            className="dark:text-white data-[state=active]:bg-slate-200 dark:data-[state=active]:bg-gray-700"
          >
            Khmer QR
          </TabsTrigger>
          <TabsTrigger
            value="tab2"
            className="dark:text-white data-[state=active]:bg-slate-200 dark:data-[state=active]:bg-gray-700"
          >
            Dollar QR{" "}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="dark:bg-gray-800">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/assets/khmerqr.jpeg"
              alt="Khmer KHQR"
              width={400}
              height={160}
              className="w-full h-auto"
            />
          </motion.div>
        </TabsContent>
        <TabsContent value="tab2" className="dark:bg-gray-800">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/assets/dollarqr.jpeg"
              alt="Dollar KHQR"
              width={400}
              height={160}
              className="w-full h-auto"
            />
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BuyMeCoffee;
