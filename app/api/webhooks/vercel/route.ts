
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { VercelDeployment, DeploymentStatus } from "@/types/vercel";
import { deploymentEvents } from '@/lib/deployment-events';

export async function POST(req: Request) {
  const headersList = headers();
  const svixId = (await headersList).get("svix-id");
  const svixTimestamp = (await headersList).get("svix-timestamp");
  const svixSignature = (await headersList).get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing Svix headers", { status: 400 });
  }

  const payload = await req.json();
  const wh = new Webhook(process.env.VERCEL_WEBHOOK_SECRET!);

  try {
    const evt = wh.verify(JSON.stringify(payload), {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as { data: VercelDeployment };

    const status: DeploymentStatus = {
      isBuilding: evt.data.state === "BUILDING",
      state: evt.data.state,
      productionUrl: evt.data.alias?.[0],
      deploymentUrl: evt.data.url,
    };

    if (evt.data.state === "BUILDING" && evt.data.buildingAt) {
      status.estimatedCompletion = new Date(
        evt.data.buildingAt + 5 * 60 * 1000 // 5 minutes estimate
      ).toLocaleTimeString();
    }

    deploymentEvents.emit("deployment-update", status);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export const dynamic = "force-dynamic";
