// src/pages/News.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rss } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "New Semester Registration Opens",
    date: "2025-10-01",
    description: "Registration for the upcoming academic semester is now open for all students. Please register for your courses through the student portal.",
  },
  {
    id: 2,
    title: "Annual Tech Fest 'Innovate 2025' Announced",
    date: "2025-09-25",
    description: "Get ready for Innovate 2025, our annual technical festival. This year's theme is 'AI for a Sustainable Future'.",
  },
  {
    id: 3,
    title: "Guest Lecture on Quantum Computing",
    date: "2025-09-20",
    description: "We are pleased to announce a guest lecture by Dr. Anya Sharma, a leading researcher in quantum computing.",
  },
  {
    id: 4,
    title: "Results for the 4th Semester Examinations are out.",
    date: "2025-09-15",
    description: "The results for the 4th semester B.Tech examinations have been published on the university website.",
  },
];

const News = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center mb-12">
        <Rss className="h-10 w-10 text-primary" />
        <h1 className="text-4xl font-extrabold ml-4 text-primary">Latest News & Updates</h1>
      </div>
      
      <div className="space-y-8">
        {newsItems.map((item) => (
          <Card key={item.id} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;
