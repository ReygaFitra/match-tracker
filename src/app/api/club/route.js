import prisma from '@/utils/prisma';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  const { name, city, points } = await req.json();
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

export const GET = async () => {
  const get = await prisma.club.findMany();
  return NextResponse.json({
    data: get,
  });
};

export const PUT = async (req) => {
  const { id, points } = await req.json();
  try {
    await prisma.club.update({
      where: {
        id: parseInt(id),
      },
      data: {
        points: parseInt(points),
      },
    });
    return NextResponse.json({
      message: 'Club updated',
    });
  } catch (error) {
    console.log('something went wrong: ', error);
    return NextResponse.json({
      message: 'Failed to update club',
    });
  }
};
