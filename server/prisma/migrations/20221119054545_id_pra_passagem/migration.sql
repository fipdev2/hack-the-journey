-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Passagem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "dataDeIda" TEXT NOT NULL,
    "dataDeVolta" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "formaDePagamento" TEXT,
    "usuarioId" TEXT NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Passagem_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Passagem" ("criadoEm", "dataDeIda", "dataDeVolta", "destino", "formaDePagamento", "id", "origem", "usuarioId", "valor") SELECT "criadoEm", "dataDeIda", "dataDeVolta", "destino", "formaDePagamento", "id", "origem", "usuarioId", "valor" FROM "Passagem";
DROP TABLE "Passagem";
ALTER TABLE "new_Passagem" RENAME TO "Passagem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
