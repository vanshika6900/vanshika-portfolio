
export const RESUME_DATA = {
    name: "VANSHIKA GOEL",
    role: "BACKEND & AI ENGINEER",
    location: "DELHI, INDIA",
    links: {
        github: "https://github.com/vanshika6900",
        linkedin: "https://www.linkedin.com/in/vanshika-goel-b39709202/",
        resume: "https://drive.google.com/file/d/1AQzSJs4nVHpYzGEM2la6xu6LWc-pA_is/view?usp=sharing"
    },
    bio: "I build high-availability distributed systems and secure microservices. My work focuses on performance, scalability, and resilience. I don't just write code; I architect solutions that power modern applications.",
    blogs: [
    { date: "24.05.10", title: "VANSHIKA TEST", tag: "TRANSMISSION" },
        { date: "24.05.09", title: "OPTIMIZING PYTHON CONCURRENCY", tag: "TECHNICAL" },
        { date: "24.05.08", title: "THE MICROSERVICES FALLACY", tag: "ARCH" },
        { date: "24.05.05", title: "KUBERNETES AT SCALE", tag: "INFRA" },
    ],
    experience: [
        {
            company: "SURAASA",
            role: "SDE – BACKEND & AI",
            period: "2024 – NOW",
            bullets: [
                "Architected distributed microservices using Java, Spring Boot, Python, Kafka, Redis & PostgreSQL, powering workflows across multiple products serving 50K+ users at 99.9% uptime.",
                "Led migration of analytics workflows from BigQuery to Snowflake, reducing synchronization latency and cutting data processing costs by 30%.",
                "Built API documentation agents converting backend schemas and route metadata into technical docs across 120+ endpoints, cutting documentation effort by ~80%.",
                "Created an AI-powered PR review workflow that analyzed code changes and generated review suggestions, reducing manual code-review effort by 40%.",
                "Constructed real-time data pipelines and event-driven systems with Kafka and Redis, processing 100K+ daily events and cutting cross-service sync latency by 40%."
            ],
            tech: ["JAVA", "SPRING BOOT", "PYTHON", "DJANGO", "KAFKA", "REDIS", "POSTGRES", "SNOWFLAKE"]
        },
        {
            company: "SURAASA",
            role: "SDE INTERN – BACKEND & AI",
            period: "2023 – 2024",
            bullets: [
                "Developed LLM-assisted grading workflows processing 5,000+ weekly submissions, reducing manual review errors by nearly 50%.",
                "Implemented JWT/RBAC authentication systems securing 15+ internal tools across 4 operational teams, eliminating 100% of unauthorized-access incidents.",
                "Designed Celery and PostgreSQL-based asynchronous workflows for educational data ingestion, improving background task reliability by 35% and reducing processing bottlenecks by 45%."
            ],
            tech: ["PYTHON", "DJANGO", "JAVA", "SPRING BOOT", "CELERY", "POSTGRES", "JWT/RBAC"]
        }
    ],
    projects: [
        {
            title: "Intelligent Talent Matching & Jobs Platform",
            bullets: [
                "Designed a scalable job-matching engine that paired candidate profiles to job descriptions using semantic similarity and vector search.",
                "Built an AI-based resume parsing pipeline extracting structured data from unstructured PDF resumes with 95%+ accuracy.",
                "Engineered a Redis/Kafka recommendation system delivering low-latency results for 50K+ active users."
            ],
            tech: ["NODE.JS", "GO", "REDIS", "KAFKA"]
        },
        {
            title: "Autonomous Curriculum Agent",
            bullets: [
                "Developed the backend for an autonomous curriculum system handling lesson planning, sequencing, and teacher scheduling using LLM prioritization logic.",
                "Implemented analytics and tracking features for monitoring student performance and delivering personalized learning content in real time."
            ],
            tech: ["GO", "NODE.JS", "LLM", "ANALYTICS"]
        }
    ],
    skills: [
        { category: "LANGUAGES", items: ["PYTHON", "JAVA", "JS", "GO"] },
        { category: "BACKEND", items: ["SPRING BOOT", "DJANGO", "NODE.JS", "MICROSERVICES", "GRPC"] },
        { category: "AI / ML", items: ["LLMS", "RAG", "VECTOR DB", "PROMPT ENG", "AI AGENTS", "GEN AI"] },
        { category: "INFRA & DATA", items: ["DOCKER", "K8S", "KAFKA", "REDIS", "POSTGRES", "MONGO", "GCP", "AWS"] },
        { category: "ARCHITECTURE", items: ["EVENT-DRIVEN", "PUB/SUB", "HLD/LLD", "CI/CD"] }
    ],
    stats: [
        { label: "ACTIVE USERS", value: "50K+" },
        { label: "DAILY EVENTS", value: "100K+" },
        { label: "UPTIME", value: "99.9%" }
    ]
};
