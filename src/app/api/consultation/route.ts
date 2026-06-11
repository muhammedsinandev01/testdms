const RECIPIENT_EMAIL = "mediaschooldock@gmail.com";

type ConsultationPayload = {
  fullName?: unknown;
  courseName?: unknown;
  phoneNumber?: unknown;
};

function asCleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ConsultationPayload;
    const fullName = asCleanString(payload.fullName);
    const courseName = asCleanString(payload.courseName);
    const phoneNumber = asCleanString(payload.phoneNumber);

    if (!fullName || !courseName || !phoneNumber) {
      return Response.json(
        { ok: false, error: "Missing required application details." },
        { status: 400 },
      );
    }

    const formData = new FormData();
    formData.append("Full Name", fullName);
    formData.append("Course Name", courseName);
    formData.append("Phone Number", phoneNumber);
    formData.append(
      "Message",
      `New Dock Media School consultation request from ${fullName}.`,
    );
    formData.append("_subject", `New DMS application - ${fullName}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
      cache: "no-store",
    });

    if (!response.ok) {
      return Response.json(
        { ok: false, error: "Application email could not be sent right now." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Application email could not be sent right now." },
      { status: 500 },
    );
  }
}
