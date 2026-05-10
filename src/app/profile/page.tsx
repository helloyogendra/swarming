import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CheckoutButton from "@/components/CheckoutButton";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/auth/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      subscriptions: {
        include: {
          course: true,
        },
      },
    },
  });

  if (!user) {
    redirect("/auth/login");
  }

  // Find a demo course to buy if not subscribed to any
  const availableCourse = await prisma.course.findFirst();

  return (
    <div className="container py-16 animate-fade-in">
      <h1 className="section-title">My <span className="gradient-text">Profile</span></h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-card md:col-span-1">
          <h3 className="mb-4 gradient-text">Personal Details</h3>
          <p className="mb-2"><strong>Name:</strong> {user.name}</p>
          <p className="mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="mb-2"><strong>Mobile:</strong> {user.mobile || "Not provided"}</p>
          <p className="mb-2"><strong>Member Since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>

        <div className="glass-card md:col-span-2">
          <h3 className="mb-4 gradient-text">My Courses & Subscriptions</h3>
          
          {user.subscriptions.length > 0 ? (
            <div className="grid gap-4">
              {user.subscriptions.map((sub) => (
                <div key={sub.id} className="glass-card" style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)' }}>
                  <h4>{sub.course.title}</h4>
                  <p className="text-secondary text-sm mt-1">{sub.course.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '999px', 
                      fontSize: '0.875rem', 
                      background: sub.status === 'PAID' ? 'var(--primary-color)' : 'var(--secondary-color)' 
                    }}>
                      {sub.status}
                    </span>
                    <button className="btn btn-secondary py-1 px-4">Go to Course</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p className="text-secondary mb-4">You are not subscribed to any courses yet.</p>
              {availableCourse && (
                <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                  <h4>{availableCourse.title}</h4>
                  <p className="text-secondary text-sm mt-1">{availableCourse.description}</p>
                  <p className="mt-2 font-bold">₹{availableCourse.price}</p>
                  <div className="mt-4">
                    <CheckoutButton courseId={availableCourse.id} price={availableCourse.price} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
