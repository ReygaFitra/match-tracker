import prisma from '@/utils/prisma';
import { NextResponse } from 'next/server';

export const Club_POST = async (req) => {
  const { name, city, points } = await req.JSON();
  try {
    await prisma.club.create({
      data: {
        name,
        city,
        points,
      },
    });
    return NextResponse.json({
      message: 'Club created',
    });
  } catch (error) {
    console.log('something went wrong: ', error);
    return NextResponse.json({
      message: 'Failed to create club',
    });
  }
};

export const Club_GET = async () => {
  const get = await prisma.club.findMany();
  return NextResponse.json({
    data: get,
  });
};
