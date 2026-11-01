/**
 * Mensagens gerais dos formulários (sucesso/erro), usadas pelas Server Actions.
 * As mensagens de validação de cada campo estão nos schemas (src/lib/validation/).
 */

export const contactMessages = {
  success: "Obrigado! Recebemos a sua mensagem e responderemos com a maior brevidade possível.",
  invalid: "Há campos por corrigir.",
  failure:
    "Não foi possível enviar a mensagem. Tente novamente ou escreva-nos para jefaicoimbra@gmail.com.",
} as const;

export const applicationMessages = {
  success:
    "Candidatura recebida! Vais receber um email de confirmação e o Departamento de RH entrará em contacto contigo.",
  invalid: "Há campos por corrigir — revê as mensagens a vermelho.",
  closed: "As candidaturas estão encerradas de momento.",
  failure:
    "Não foi possível submeter a candidatura. Tenta novamente daqui a uns minutos ou escreve-nos para jefaicoimbra@gmail.com.",
  notImplemented: "O envio de candidaturas ainda não está ativo (WEB-25).",
} as const;
