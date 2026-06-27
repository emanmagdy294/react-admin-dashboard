import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteDialog({
  open,
  onClose,
  onConfirm,
}: DeleteDialogProps) {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-center"> {t("deleteuser")}</DialogTitle>

      <DialogContent>
        <DialogContentText>{t("messagedelete")}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{t("cancel")}</Button>

        <Button color="error" variant="contained" onClick={onConfirm}>
          {t("delete")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
