
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  specialization: string;
}

const LeadCapture = () => {
  const navigate = useNavigate();
  const form = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
  console.log('Form submitted:', data);

  const formData = new FormData();
  formData.append("الاسم", data.fullName);
  formData.append("رقم التليفون", data.phoneNumber);
  formData.append("الإيميل", data.email);
  formData.append("التخصص", data.specialization);

  try {
    await fetch("https://formsubmit.co/ziadstudy777@gmail.com", {
      method: "POST",
      body: formData,
    });

    // خزّن البيانات محليًا
    localStorage.setItem('leadData', JSON.stringify(data));

    // توجه لصفحة الفيديو
    navigate('/video');
  } catch (error) {
    alert("حدث خطأ أثناء الإرسال، برجاء المحاولة مرة أخرى.");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Arabic headline */}
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 leading-relaxed" dir="rtl">
          السيشن الأهم لو انت طالب لسه مخلص الثانوية العامة
        </h1>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                rules={{ required: "الاسم مطلوب" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 text-right block" dir="rtl">الاسم</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 text-right"
                        placeholder="ادخل اسمك"
                        dir="rtl"
                      />
                    </FormControl>
                    <FormMessage className="text-right" dir="rtl" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                rules={{ required: "رقم التليفون مطلوب" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 text-right block" dir="rtl">رقم التليفون</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        type="tel"
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 text-right"
                        placeholder="ادخل رقم التليفون"
                        dir="rtl"
                      />
                    </FormControl>
                    <FormMessage className="text-right" dir="rtl" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                rules={{ 
                  required: "الإيميل مطلوب",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "إيميل غير صحيح"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 text-right block" dir="rtl">الإيميل</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        type="email"
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 text-right"
                        placeholder="ادخل الإيميل"
                        dir="rtl"
                      />
                    </FormControl>
                    <FormMessage className="text-right" dir="rtl" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialization"
                rules={{ required: "اختر التخصص" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 text-right block" dir="rtl">التخصص</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white text-right" dir="rtl">
                          <SelectValue placeholder="اختر التخصص" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="science" className="text-white hover:bg-gray-700 text-right" dir="rtl">علمي علوم</SelectItem>
                        <SelectItem value="math" className="text-white hover:bg-gray-700 text-right" dir="rtl">علمي رياضة</SelectItem>
                        <SelectItem value="literature" className="text-white hover:bg-gray-700 text-right" dir="rtl">أدبي</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-right" dir="rtl" />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold text-lg py-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                dir="rtl"
              >
                الدخول إلى المحاضرة المجانية
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LeadCapture;
