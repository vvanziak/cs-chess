declare global {
  type ConfirmRejectCallbacks = [() => void, (rejectReason? = string) => void];

  interface DataConnectionEvent {
    type: "ping" | "sync-start" | "purchase-and-place";
    content: {
      stamp: number;
      [key: string]: any;
    };
    responseCode?: "ok" | "retry" | "failed";
  }

  interface GameConnectorEventCallbacks {
    ping: {
      resolve: null | ((any) => DataConnectionEvent["content"]);
      reject: null | (() => void);
    };
    "sync-start": {
      resolve: null | ((any) => DataConnectionEvent["content"]);
      reject: null | (() => void);
    };
    "purchase-and-place": {
      resolve: null | ((any) => DataConnectionEvent["content"]);
      reject: null | (() => void);
    };
  }

  interface GameSetupOptions {
    tempo: number;
    startingCash: number;
    remotePlayerId: string;
  }

  interface BoardLocation {
    r: number;
    c: number;
  }

  type PieceTypes = "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";

  interface Piece {
    player: "black" | "white";
    type: PieceTypes;
    location: BoardLocation;
    moveTo: null | BoardLocation;
    purchaseVerified: boolean;
    // Has player 2 also verified the move/purchase?
  }
}
export {};
