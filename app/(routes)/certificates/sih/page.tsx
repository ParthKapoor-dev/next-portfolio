"use client";

import * as data from "@/app/data.json"
import { useRouter } from "next/navigation";

export default function SIHCert() {
    const router = useRouter();
    router.push(data.certificates.sih)
}
