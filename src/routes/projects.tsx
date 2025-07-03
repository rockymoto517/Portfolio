import CardImage from "@/components/card-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="w-full h-fit grid grid-cols-1 align-middle justify-items-center justify-center p-2 mb-auto">
      <p className="text-center text-xl pb-2 my-4">
        Here is a list of some of my more notable projects.
        <br /> Projects with a
        <Check color="#00ff00" className="inline ml-1 pb-1" /> next to the name
        are still being maintained currently.
      </p>
      <div className="w-4/5 grid grid-cols-1 justify-items-center justify-between">
        <Carousel>
          <CarouselContent>
            {[
              <CarouselItem key="1">
                <Card className="w-fit m-auto max-w-2/3">
                  <CardHeader>
                    <CardTitle>SVD Python Notebook</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardImage
                      link="https://github.com/rockymoto517/SVDNotebook/blob/main/SVDProject.ipynb"
                      src="p.png"
                      alt="A snippet of the Python notebook."
                    />
                    <Separator className="mt-4 border-1" />
                    <p className="mt-2">
                      In this Python notebook, I detail the process of a
                      compression algorithm using Singular Value Decomposition
                      (SVD). I walk through an example image to demonstrate the
                      algorithm with small code snippets, analyze the
                      practicality of the algorithm using real world examples,
                      and then show a high-level overview of the algorithm.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>,
              <CarouselItem key="2">
                <Card className="w-fit m-auto max-w-2/3">
                  <CardHeader>
                    <CardTitle>
                      Eclipse Builder
                      <Check color="#00ff00" className="inline ml-1 pb-1" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardImage
                      link="https://rockymoto517.github.io/eclipsebuilder/"
                      src="e.png"
                      alt="A snapshot of the eclipse builder website."
                    />
                    <Separator className="mt-4 border-1" />
                    <p className="mt-2">
                      This is a forked webapp from{" "}
                      <a
                        href="https://pd2builder.netlify.app/"
                        target="_blank"
                        className="underline"
                      >
                        pd2builder
                      </a>
                      . In this fork, I swapped out every single skill and perk
                      deck card and changed the mathematics in order to match an
                      alternative version of the skilltree from the game Payday
                      2.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>,
              <CarouselItem key="3">
                <Card className="w-fit m-auto max-w-2/3">
                  <CardHeader>
                    <CardTitle>Yoga Experiences Africa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardImage
                      link="https://www.yogaexperiences.africa/"
                      src="y.png"
                      alt="A snapshot of the Yoga Experiences Africa website."
                    />
                    <Separator className="mt-4 border-1" />
                    <p className="mt-2">
                      When working for Yoga Experiences Africa, I was tasked
                      with implementing the frontend design for certain pages. I
                      had to communicate with the managerial and dev team
                      remotely with a timezone difference of 6 hours. This
                      experience helped train my communication skills on top of
                      my ability to develop in the frontend side.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>,
              <CarouselItem key="4">
                <Card className="w-fit m-auto max-w-2/3">
                  <CardHeader>
                    <CardTitle>Twitch Bot</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardImage
                      link="https://github.com/rockymoto517/x86-twitch-bot"
                      src="t.png"
                      alt="Demonstration of the twitch bot in action."
                    />
                    <Separator className="mt-4 border-1" />
                    <p className="mt-2">
                      This Twitch Bot was developed in C++ to grab messages from
                      Twitch chat using its EventSub system. This was done in
                      this particular language to satisfy several conditions.
                      The first being that it compiles in to a dynamic library
                      (dll for windows), the second being that it can be
                      compiled for x86 architectures, and the third being that
                      the dll contains specific binary signatures. This third
                      condition allows the dll to be accessed by a modloader for
                      Payday 2 and loaded in as an external library, creating a
                      Twitch API inside the game.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>,
            ]}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
