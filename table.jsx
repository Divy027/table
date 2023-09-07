<div className="border-[#5a2fbe] border-solid border-[1px] text-black rounded-2xl p-3 nftItem-shadow mt-4 ">
              <div className="flex items-center">
                              <div className="w-[20%] text-center border-b-2 border-purple-500 pb-2 font-black h-full">
                              <span className="text-xs sm:text-[16px]">Rank </span>
                </div>
                              <div className="w-[20%] text-center border-b-2 border-purple-500 pb-2 font-black h-full">
                              <span className="text-xs sm:text-[16px]">User </span>
                </div>
                              <div className="w-[20%] text-center border-b-2 border-purple-500 pb-2 font-black h-full">
                              <span className=" text-xs sm:text-[16px]">Raffles</span>
                </div>
                              <div className="w-[25%] text-center border-b-2 border-purple-500 pb-2 font-black h-full">
                  <span className="text-xs sm:text-[16px]">Tickets Sold</span>
                </div>
                              <div className="w-[25%] text-center border-b-2 border-purple-500 pb-2 font-black h-full">
                  <span className="text-xs sm:text-[16px]">Volume</span>
                </div>
              </div>
              {!raffleLoading &&
                raffleGroupByList?.map((item: any, index: number) => (
                  <div
                    className="flex items-center pt-3"
                    key={index}
                  >
                    {index === 0 && (
                      <div
                        className={
                                        "bg-gradient-to-b from-yellow-400 to-yellow-500  border-4 border-yellow-500 w-[20%] text-center badge text-white rounded-full flex items-center justify-center h-10  text-xs sm:text-[16px]"
                        }
                      >
                        {index + 1}
                      </div>
                    )}
                    {index === 1 && (
                      <div
                        className={
                                        "bg-gradient-to-b from-gray-400 to-gray-500  border-4 border-gray-500 w-[20%] text-center badge text-white rounded-full flex items-center justify-center h-10  text-xs sm:text"
                        }
                      >
                        {index + 1}
                      </div>
                    )}
                    {index === 2 && (
                      <div
                        className={
                                        "bg-gradient-to-b from-orange-400 to-orange-500  border-4 border-orange-500 1w-[15%] text-center badge text-white rounded-full flex items-center justify-center h-10 w-10 ml-3"
                        }
                      >
                        {index + 1}
                      </div>
                    )}
                                  {index != 0 && index != 1 && index != 2 && (
                      <div
                        className={
                                        "1w-[15%] text-center badge text-black rounded-full flex items-center justify-center h-10 w-10 ml-3"
                        }
                      >
                        {index + 1}
                      </div>
                    )}
                                  <div className="w-[35%] text-center font-bold text-purple-500 block  truncate">
                      {item.twitter !== undefined && item.twitter}
                                    {item.twitter === undefined &&
                                      item.discord !== undefined &&
                                      item.discord}
                      {item.discord === undefined &&
                        item.twitter === undefined &&
                                      item.seller.slice(0, 3) +
                                        "..." +
                                        item.seller.slice(-4)}
                    </div>
                                  <div className="w-[20%] text-center">
                      {item.sellerCount?.length}
                    </div>
                                  <div className="w-[25%] text-center">
                      {item.soldTicketAmount}
                    </div>
                                  <div className="w-[25%] text-center">
                      {item.soldVolume.toFixed(4)}
                    </div>
                  </div>
                  ))}
              </div>
