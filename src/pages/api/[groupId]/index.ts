import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

const group = async (req: NextApiRequest, res: NextApiResponse) => {
  const { groupId: id } = req.query;

  const group = await prisma.group.findFirst({
    where: {
      id: id as string,
    },
    select: {
      createdAt: true,
      description: true,
      name: true,
      rules: true,
      tags: true,
      members: true,
      moderators: true,
    },
  });

  res.status(200).json(group);
};

export default group;
