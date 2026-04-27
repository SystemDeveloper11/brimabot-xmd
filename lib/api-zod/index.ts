export type RequestPairingBody = {
  phone: string;
};

export type RequestPairingResponse = {
  success: boolean;
  code?: string;
};

export type GetPairingStatusResponse = {
  status: "pending" | "connected";
};