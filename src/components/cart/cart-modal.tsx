"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";

import { useCart } from "./cart-context";
import { createCartAndSetCookie } from "./actions";
import { redirectToCheckout } from "./actions";

export default function CartModal() {
	const { cart } = useCart();
	const [isOpen, setIsOpen] = useState(false);
	const quantityRef = useRef(cart?.totalQuantity);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	useEffect(() => {
		if (!cart) {
			createCartAndSetCookie();
		}
	}, [cart]);

	useEffect(() => {
		if (
			cart?.totalQuantity &&
			cart?.totalQuantity !== quantityRef.current &&
			cart?.totalQuantity > 0
		) {
			if (!isOpen) {
				setIsOpen(true);
			}

			quantityRef.current = cart?.totalQuantity;
		}
	}, [isOpen, cart?.totalQuantity, quantityRef]);

	return (
		<>
			<button onClick={openModal} className="rounded-md p-2">
				<div className="relative">
					<ShoppingBagIcon className="h-6" />
					{
						cart && cart.lines.length > 0 && (
							<div className="flex items-center justify-center absolute -mt-4 -mr-2 top-0 right-0 bg-red-300 rounded-full text-[11px] w-4 h-4">
								{cart.lines.length}
							</div>
						)
					}
				</div>
			</button>

			<Transition show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-[999]" onClose={closeModal}>
					<div className="fixed inset-0 bg-black/30" aria-hidden="true" />

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
								<TransitionChild
									as={Fragment}
									enter="transform transition ease-in-out duration-500"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<DialogPanel className="pointer-events-auto w-screen max-w-md bg-primary px-10 py-4 text-white">
										<div className="mb-8 flex items-center justify-between">
											<h2 className="text-xl">My Cart</h2>

											<button onClick={closeModal} className="rounded-md border-white/90 p-2">
												<XMarkIcon className="h-6" />
											</button>
										</div>
										{!cart || cart.lines.length === 0 ? (
											<div className="flex flex-col items-center gap-4">
												<ShoppingCartIcon className="h-24" />
												<p>Your cart is empty</p>
											</div>
										) : (
											<div className="flex flex-col items-start justify-between h-[85vh] pr-10 gap-4 overflow-y-auto">
												<div className="grid gap-4 w-full">
													{cart.lines.map((line, index) => (
														<div key={index} className="flex flex-col gap-4 w-full">
															<div className="flex items-start justify-between gap-4 w-full">
																<div className="flex items-start gap-10">
																	<Image
																		src={line.merchandise.product.featuredImage.url}
																		alt={line.merchandise.product.title}
																		width={100}
																		height={100}
																		className="border rounded border-white/20"
																	/>
																	<p>
																		{line.merchandise.product.title}
																	</p>
																</div>
																<p className="text-2xl">
																	{line.cost.totalAmount.amount} <span className="text-sm">{line.cost.totalAmount.currencyCode}</span>
																</p>
															</div>

														</div>
													))}
												</div>

												<div className="w-full">
													<div className="pb-1 flex items-center justify-between w-full border-b border-red-200">
														<p className="text-red-200 text-lg">Taxes</p>
														<p className="flex gap-2">
															{cart.cost.totalTaxAmount.amount}
															<span>
																{cart.cost.totalTaxAmount.currencyCode}
															</span>
														</p>
													</div>
													<div className="pb-1 flex items-center justify-between w-full border-b border-red-200">
														<p className="text-red-200 text-lg">Shipping</p>
														<p>Calculated at checkout</p>
													</div>
													<div className="pb-1 flex items-center justify-between w-full border-b border-red-200">
														<p className="text-red-200 text-lg">Total</p>
														<p className="flex gap-2">
															{cart.cost.totalAmount.amount}
															<span>
																{cart.cost.totalAmount.currencyCode}
															</span>
														</p>
													</div>
													<form action={redirectToCheckout}>
														<button className="bg-white w-full text-primary uppercase font-bold p-4 rounded hover:bg-white/80 mt-10">
															Proceed to Checkout
														</button>
													</form>
												</div>
											</div>
										)
										}
									</DialogPanel>
								</TransitionChild>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
