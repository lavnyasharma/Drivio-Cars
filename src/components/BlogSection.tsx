
import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: "How to maintain your luxury car's performance",
      date: "May 12, 2024",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
      category: "Maintenance"
    },
    {
      id: 2,
      title: "Top 10 electric vehicles coming in 2025",
      date: "Jun 05, 2024",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop",
      category: "Market News"
    },
    {
      id: 3,
      title: "Understanding car financing and loan terms",
      date: "Jun 18, 2024",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      category: "Financing"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <span className="text-[#e81c24] font-black uppercase text-xs tracking-[0.2em] mb-4 block">
            RECENT BLOG POSTS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2b48] tracking-tighter uppercase">
            Latest News & Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map(blog => (
            <div key={blog.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm mb-6 aspect-[4/3]">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#e81c24] text-white text-[10px] font-black uppercase px-4 py-2 rounded-sm tracking-widest shadow-xl">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-[#e81c24]" /> {blog.date}</span>
                <span className="flex items-center gap-2"><User size={14} className="text-[#e81c24]" /> {blog.author}</span>
              </div>
              <h3 className="text-2xl font-black text-[#1a2b48] mb-6 group-hover:text-[#e81c24] transition-colors leading-tight">
                {blog.title}
              </h3>
              <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#1a2b48] group-hover:text-[#e81c24] transition-all">
                Read More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
