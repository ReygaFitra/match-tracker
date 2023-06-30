import prisma from '@/utils/prisma';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  const { homeClubId, awayClubId, homeScore, awayScore } = await req.JSON();
  try {
    await prisma.score.create({
      data: {
        homeClubId,
        awayClubId,
        homeScore,
        awayScore,
      },
    });
    return NextResponse.json({
      message: 'Score created',
    });
  } catch (error) {
    console.log('something went wrong: ', error);
    return NextResponse.json({
      message: 'Failed to create score',
    });
  }
};

export const GET = async () => {
  const get = await prisma.score.findMany();
  return NextResponse.json({
    data: get,
  });
};
