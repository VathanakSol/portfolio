export interface BlogPost {
    id: string
    title: string
    excerpt: string
    content: string
    date: string
    coverImage: string
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "blockchain-basics",
      title: "Understanding Blockchain Basics",
      excerpt: "An introduction to the fundamental concepts of blockchain technology.",
      content:
        "Blockchain is a decentralized, distributed ledger technology that records transactions across many computers...",
      date: "2025-02-06",
      coverImage: "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/blockchain-3qO6rmC6pyp3N0qdFiqmvFUkmRTawa.jpg",
    },
    {
      id: "smart-contracts",
      title: "The Power of Smart Contracts",
      excerpt: "Exploring how smart contracts are revolutionizing agreements and transactions.",
      content:
        "Smart contracts are self-executing contracts with the terms of the agreement directly written into code...",
      date: "2023-06-15",
      coverImage: "/images/blockchain-basics.jpg",
    },
    {
      id: "defi-explained",
      title: "DeFi: Decentralized Finance Explained",
      excerpt: "Diving into the world of DeFi and its potential to reshape the financial landscape.",
      content:
        "Decentralized Finance, or DeFi, refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on the Ethereum blockchain...",
      date: "2023-07-01",
      coverImage: "/images/blockchain-basics.jpg",
    },
  ]
  
  