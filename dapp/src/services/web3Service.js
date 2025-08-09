import Web3 from "web3";
import ABI from "./ABI.json";

const CONTRACT_ADDRESS = "0xAC89F50B67d9ab86a2E5E38e55344d95A27B5002";

export async function connectContract() {
  if (!window.ethereum) throw new Error("Sem MetaMask instalada");

  const web3 = new Web3(window.ethereum);

  const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

  if (!accounts || !accounts.length) throw new Error("Carteira não permitida");

  return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from: accounts[0] });
}

export async function addLink(url, linkId, feeInWei) {
  const Contract = await connectContract();
  return Contract.methods.addLink(url, linkId, feeInWei).send();
}

export async function getLink(linkId) {
    const Contract = await connectContract();
    return Contract.methods.getLink(linkId).call();
}
export async function payLink(linkId, valueInWei) {
  const Contract = await connectContract();
  return Contract.methods.payLink(linkId).send({
    value: valueInWei
  });
}


