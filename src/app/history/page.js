"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { queryHistories } from "@/app/services/index";

export default async function HistoryPage() {
  const data = await queryHistories()
  const histories = data.histories || []

  // Sort histories by year
  const sortedHistories = [...histories].sort((a, b) => Number.parseInt(a.year) - Number.parseInt(b.year))

  return (
    <div className="pt-16">
     

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Decorative element */}
          <div className="flex justify-center mb-12">
            <div className="w-24 h-1 bg-purple-gradient rounded-full"></div>
          </div>

          <div className="timeline-container">
            {sortedHistories.map((history, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{history.year}</div>
                <div className="bg-card shadow-lg rounded-lg p-6 card-hover-effect">
                  <p className="text-lg leading-relaxed">{history.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* If no history items are available */}
          {sortedHistories.length === 0 && (
            <div className="text-center p-8 bg-muted rounded-lg">
              <p>Our history timeline is currently being updated. Please check back soon.</p>
            </div>
          )}

          {/* Decorative element at the end */}
          <div className="flex justify-center mt-12">
            <div className="w-24 h-1 bg-purple-gradient rounded-full"></div>
          </div>

          {/* Additional content */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission Continues</h2>
            <p className="text-muted-foreground leading-relaxed">
              As we look to the future, we remain committed to providing exceptional childcare services and creating a
              nurturing environment where every child can thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

