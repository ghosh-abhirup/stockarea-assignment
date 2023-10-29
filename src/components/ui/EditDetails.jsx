import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

const EditDetails = ({ open, onClose, data, edit }) => {
  const [name, setName] = useState(data?.name);
  const [cluster, setCluster] = useState(data?.cluster);
  const [city, setCity] = useState(data?.city);
  const [space, setSpace] = useState(parseInt(data?.space_available));
  const [isLive, setIsLive] = useState(data?.is_live);

  const closeModal = () => {
    setName(data?.name);
    setCluster(data?.cluster);
    setCity(data?.city);
    setSpace(parseInt(data?.space_available));
    setIsLive(data?.is_live);

    onClose();
  };

  const editHandler = () => {
    edit(name, cluster, city, parseInt(space), isLive);

    closeModal();
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="w-full flex-flex-col gap-4 items-start justify-center">
                  <p className="text-base sm:text-lg font-bold mb-2">
                    Edit warehouse details
                  </p>
                  <div>
                    <p className="labelStyle">Warehouse name</p>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Warehouse-256"
                      className="inputStyles"
                    />
                  </div>
                  <div>
                    <p className="labelStyle">Cluster</p>
                    <input
                      type="text"
                      name="Cluster"
                      id="Cluster"
                      placeholder="e.g. cluster-a-34"
                      value={cluster}
                      onChange={(e) => setCluster(e.target.value)}
                      className="inputStyles"
                    />
                  </div>
                  <div>
                    <p className="labelStyle">City</p>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="e.g. Delhi"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="inputStyles"
                    />
                  </div>
                  <div>
                    <p className="labelStyle">Space available</p>
                    <input
                      type="number"
                      name="space"
                      id="space"
                      placeholder="e.g. 12000"
                      value={space}
                      onChange={(e) => setSpace(e.target.value)}
                      className="inputStyles"
                    />
                  </div>
                  <div className="flex items-center gap-6 mt-4">
                    <p className="font-bold text-sm sm:text-base">
                      Live status
                    </p>
                    <div className="flex items-start sm:items-center justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base font-semibold text-black">
                          Yes
                        </span>
                        <input
                          type="radio"
                          name="radioBtn1"
                          id="radioBtn1"
                          value={"Yes"}
                          checked={isLive}
                          onChange={() => setIsLive(true)}
                          className="mr-4"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base font-semibold text-black">
                          No
                        </span>
                        <input
                          type="radio"
                          name="radioBtn2"
                          id="radioBtn2"
                          value={"No"}
                          checked={!isLive}
                          onChange={() => setIsLive(false)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex items-center gap-2 mt-4">
                    <button className="btnStyle" onClick={closeModal}>
                      Cancel
                    </button>
                    <button className="btnStyle" onClick={editHandler}>
                      Save
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditDetails;
