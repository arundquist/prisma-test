'use server';
import { prisma } from "@/lib/prisma";
import { revalidatePath } from 'next/cache';

export const addOne=async ()=>{
    const newCheckIn = await prisma.checkin.create();
    revalidatePath("/");
  }
