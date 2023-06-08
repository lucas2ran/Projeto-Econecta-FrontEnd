import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import "./DeletarPostagem.css";
import { useNavigate, useParams } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { buscaId, deleteId } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function DeletarPostagem() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [post, setPosts] = useState<Postagem>();

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/postagem/${id}`, setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/postagem");
    deleteId(`/postagem/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.success("Postagem deletada com sucesso", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
  }

  function nao() {
    navigate("/postagem");
  }

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="bgDeletarP"
      >
        <Card variant="outlined" className="cardDelPost">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a postagem:
              </Typography>
              <Typography color="textSecondary">{post?.titulo}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="marginLeft outlinedButtonC"
                  size="large"
                  style={{
                    borderColor: "white",
                    backgroundColor: "#09221a",
                    color: "white",
                  }}
                >
                  Sim
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="large"
                  className="outlinedButtonC"
                  style={{
                    borderColor: "white",
                    backgroundColor: "#09221a",
                    color: "white",
                  }}
                >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
export default DeletarPostagem;
