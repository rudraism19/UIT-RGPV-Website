// src/pages/About.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, GraduationCap, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-primary">About UIT RGPV Shivpuri</h1>
      
      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Our Institution</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            University Institute of Technology, Shivpuri, is a constituent college of Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal, the University of Technology of Madhya Pradesh. Established by the Government of Madhya Pradesh, the institute is dedicated to providing quality technical education and fostering a research-oriented environment. Our goal is to produce skilled engineers and leaders who can contribute to the technological and social development of the nation.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <Card className="shadow-md hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="mt-4">State-of-the-Art Infrastructure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Modern labs, spacious classrooms, and a well-stocked library to support academic excellence.</p>
          </CardContent>
        </Card>
        <Card className="shadow-md hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="mt-4">Experienced Faculty</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">A team of highly qualified and dedicated faculty members to guide and mentor students.</p>
          </CardContent>
        </Card>
        <Card className="shadow-md hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="mt-4">Vibrant Student Life</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">A variety of clubs, events, and activities that foster creativity, teamwork, and leadership.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
