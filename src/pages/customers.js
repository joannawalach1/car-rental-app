import React, { useState, useEffect } from "react";
import Layout from "../components/layout";

import { supabase } from "../supabase";

const Clients = (props) => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetchCustomers();
    console.log(customers);
  }, []);

  async function fetchCustomers() {
    let { data: customers } = await supabase.from("customers").select("*");
    setCustomers(customers);
  }

  async function addCustomer() {
    const { data: customers } = await supabase
      .from("customers")
      .insert([{ email: "psp.olkowice@op.pl" }]);
    setCustomers(customers);
  }

  async function modifyCustomer() {
    const { data: customers } = await supabase
      .from("customers")
      .update({ email: "psp.olkowice@op.pl" })
      .match({ email: "bbb.@op.pl" });
    setCustomers(customers);
  }

  async function removeCustomer() {
    const { data: customers } = await supabase
      .from("customers")
      .delete()
      .match({ id: 1 });
    setCustomers(customers);
  }

  return (
    <Layout>
      <h1>Protected Page - Customers</h1>
      <div>
        {customers.map((customer) => (
          <div key={customer.id}>
            <div>{customer.id}</div>
            <div>{customer.name}</div>
          </div>
        ))}
      </div>
      <button onClick={addCustomer}>dodaj klienta</button>
      <button onClick={removeCustomer}>usuń klienta</button>
      <button onClick={modifyCustomer}>modyfikuj klienta</button>
    </Layout>
  );
};

export default Clients;
