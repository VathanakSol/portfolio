export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime?: string
  coverImage: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "blockchain-basics",
    title: "Understanding Blockchain Basics",
    excerpt: "An introduction to the fundamental concepts of blockchain technology.",
    content:
      "Blockchain is a revolutionary technology that has transformed the way we think about data, trust, and transactions. At its core, blockchain is a decentralized, distributed ledger technology that records transactions across many computers in such a way that the registered transactions cannot be altered retroactively. This ensures transparency, security, and immutability, making it a powerful tool for various industries beyond just cryptocurrency. Blockchain is a decentralized, distributed ledger technology that allows data to be stored globally on thousands of servers while letting anyone on the network see everyone else's entries in near real-time. It is essentially a chain of blocks, where each block contains a list of transactions, and these blocks are linked together using cryptography. Blockchain is a revolutionary technology that enables secure, transparent, and decentralized record-keeping. Its applications extend far beyond cryptocurrencies, offering solutions for industries like finance, healthcare, supply chain, and more. By eliminating intermediaries and providing a tamper-proof system, blockchain has the potential to transform how we interact, transact, and trust in the digital age.",
    date: "2025-02-06",
    readTime: "2 min read",
    coverImage: "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/blockchain-3qO6rmC6pyp3N0qdFiqmvFUkmRTawa.jpg",
  },
  // {
  //   id: "smart-contracts",
  //   title: "The Power of Smart Contracts",
  //   excerpt: "Exploring how smart contracts are revolutionizing agreements and transactions.",
  //   content:
  //     "Smart contracts are self-executing contracts with the terms of the agreement directly written into code...",
  //   date: "2023-06-15",
  //   readTime: "3 min read",
  //   coverImage: "/images/blockchain-basics.jpg",
  // },
  // {
  //   id: "defi-explained",
  //   title: "DeFi: Decentralized Finance Explained",
  //   excerpt: "Diving into the world of DeFi and its potential to reshape the financial landscape.",
  //   content:
  //     "Decentralized Finance, or DeFi, refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on the Ethereum blockchain...",
  //   date: "2023-07-01",
  //   readTime: "4 min read",
  //   coverImage: "/images/blockchain-basics.jpg",
  // },
]

