# Building Schrödinger's App

Can an application be a monolith and microservices at the same time? Spoiler alert: **yes**!

In this hands-on workshop, we'll build a full-stack application with TypeScript, React and Jitar that blurs the traditional boundaries between monolithic and distributed architectures.

Much like Schrödinger's famous thought experiment, the application's deployment model remains undecided during development. Only at deployment time do we choose whether it runs as a monolith, a set of microservices, or something in between.

Along the way, you'll learn practical techniques for designing scalable systems, defining logical and physical boundaries, creating distributable components, and practical deployment strategies.

This workshop is ideal for full-stack developers, backend developers, and software architects.

# Prerequisites

Before we begin, make sure you have Git, Node.js (version 24 or later), and a code editor installed.

# Program

This workshop is divided into two parts:

## Part 1: Monolith

We'll start with a full-stack monolith that unifies the frontend and backend into a single application. In this part we'll configure the app for an independent deployment of the frontend and the backend.

The code and instructions of this part are available in the branch `monolith`.

## Part 2: Modulith

We'll scale the system up to a domain driver modular monolith composed of multiple applications and explore how the same codebase can be deployed either as a monolith or as a collection of microservices. In this part we'll split the backend into multiple parts.

The code and instructions of this part are available in the branch `modulith`.
