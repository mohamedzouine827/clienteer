import React, { useState, useEffect } from 'react';
import BackIcon from '../Assets/BackIcon';
import { db } from '@/db/db';
import { DesignType, DesignId } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/router';
import TheBrief from './TheBrief';

interface DesignArticle {
  DesignId: number;
  DesignTypeID: string;
  User: string;
  Description: string;
  Overview: string;
  Objectives: string;
  Budget: number;
  Audience: string;
  key: string;
  Timeline: string;
}

export default  function BriefDescription() {


  

  const router = useRouter();
  const routeParts = router.route.split('/');

  const DesignTP = routeParts[2]; // Indexing starts at 0

  

  

  // Example data
  

  return (
    <TheBrief id={Number(router.query.id)} designT={DesignTP}/>
  );
}
