import prisma from '@/utils/prisma';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  const { homeClubId, awayClubId, homeScore, awayScore } = await req.json();
  try {
    await prisma.score.create({
      data: {
        homeClubId: parseInt(homeClubId),
        awayClubId: parseInt(awayClubId),
        homeScore: parseInt(homeScore),
        awayScore: parseInt(awayScore),
      },
    });

    // Update home club points
    const homeClub = await prisma.club.findUnique({
      where: { id: parseInt(homeClubId) },
    });
    const homeClubPoints = homeClub.points;
    const updatedHomeClubPoints = homeScore > awayScore ? homeClubPoints + 3 : homeScore < awayScore ? homeClubPoints : homeClubPoints + 1;
    await prisma.club.update({
      where: { id: parseInt(homeClubId) },
      data: { points: updatedHomeClubPoints },
    });

    // Update away club points
    const awayClub = await prisma.club.findUnique({
      where: { id: parseInt(awayClubId) },
    });
    const awayClubPoints = awayClub.points;
    const updatedAwayClubPoints = awayScore > homeScore ? awayClubPoints + 3 : awayScore < homeScore ? awayClubPoints : awayClubPoints + 1;
    await prisma.club.update({
      where: { id: parseInt(awayClubId) },
      data: { points: updatedAwayClubPoints },
    });

    return NextResponse.json({
      message: 'Score added and club points updated',
    });
  } catch (error) {
    console.log('something went wrong: ', error);
    return NextResponse.json({
      message: 'Failed to add score and update club points',
    });
  }
};

export const GET = async () => {
  const get = await prisma.score.findMany();
  return NextResponse.json({
    data: get,
  });
};
