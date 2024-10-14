
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json(); 

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email and password are required' }), { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user in the database
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'ADMIN', // Set default role
      },
    });

    // Return the user information without password
    return new Response(
      JSON.stringify({
        message: 'User created successfully',
        user: { id: user.id, email: user.email, role: user.role }
      }),
      { status: 201 }
    );

  } catch (error) {
    console.error('Error during signup:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong during signup' }), { status: 500 });
  }
}

// You can also export other HTTP methods if needed (GET, PUT, DELETE)