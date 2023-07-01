import prisma from '@/utils/prisma';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  const { homeClubId, awayClubId, homeScore, awayScore } = await req.json();
  try {
    const createdScore = await prisma.score.create({
      data: {
        homeClubId: parseInt(homeClubId),
        awayClubId: parseInt(awayClubId),
        homeScore: parseInt(homeScore),
        awayScore: parseInt(awayScore),
      },
    });
    return NextResponse.json({
      message: 'Score created',
      data: createdScore,
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
